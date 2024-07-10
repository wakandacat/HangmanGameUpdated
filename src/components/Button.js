import { useEffect } from "react";

const Button = ({ onClick, label }) => {

    //ensure buttons in navbar are not selected by accident when hitting ENTER
    useEffect(() => {
        const handleFocus = (event) => {
          event.target.blur();
        };
    
        // Add the event listener to all buttons
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
          button.addEventListener('focus', handleFocus);
        });

        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
            select.addEventListener('focus', handleFocus);
          });
    
        // Cleanup event listeners on unmount
        return () => {
          buttons.forEach(button => {
            button.removeEventListener('focus', handleFocus);
          });

          selects.forEach(select => {
            select.removeEventListener('focus', handleFocus);
          });
        };
      }, []);


    return <button tabIndex="-1" onClick={onClick}>{label}</button>;
};
  
export default Button;