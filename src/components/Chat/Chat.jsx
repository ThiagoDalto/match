// Create a hook to seperate out logic.
const useHubspotChat = (portalId) => {
    const [ hasLoaded, setHasLoaded ] = React.useState(false);
    const [ activeConversation, setActiveConversation ] = React.useState(false);
    const eventRef = React.useRef(null);
    
    React.useEffect(() => {
      console.log('hey')
      
      // Add event listener.
      window.hsConversationsOnReady = [() => {
        setHasLoaded(true);
      }];
     
      // Create script component.
      let script = document.createElement('script');
      script.src=`//js.hs-scripts.com/41667601.js`;
      script.async = true;
      
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
        window.hsConversationsOnReady = [];
      }
      
    }, []);
    
    // Subscripe to conversation events.
    React.useEffect(() => {
      eventRef.current = (payload) => {
        setActiveConversation(payload.conversation.conversationId);
      }
     
      if (hasLoaded) {
        window.HubSpotConversations.on( 'conversationStarted', eventRef.current);
      }
      
      return () => {
        window.HubSpotConversations.off('conversationStarted', eventRef.current);
      }
      
    }, [hasLoaded]);
    
    const openHandler = React.useCallback(() => {
      if (hasLoaded) {
        window.HubSpotConversations.widget.open();
      }
    }, [hasLoaded]);
    
    const closeHandler = React.useCallback(() => {
      if (hasLoaded) {
        window.HubSpotConversations.widget.close();
      }
    }, [hasLoaded])
    
    return {
      hasLoaded, 
      activeConversation,
      openHandler,
      closeHandler
    };
  }
  
 