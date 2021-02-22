import ReactGA from 'react-ga';

export const initGA = () => {           
    ReactGA.initialize('UA-189367787-1'); 
 }

 export const PageView = () => {  
    ReactGA.pageview(window.location.pathname + window.location.search);
}

export const Event = (category, action, label) => {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
      nonInteraction: true
    });
  };