import { useHistory, useLocation } from 'react-router';

const useLink = () =>{
    const history = useHistory();
    const location = useLocation();

    const isModifiedEvent = (event) =>
        !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

    const isLeftClickEvent = (event) => event.button === 0;

    const isTargetBlank = (event) => {
        const target = event.target.getAttribute('target');
        return target && target !== '_self';
    };

    const linkTo = (path, checkActive = false) => {
        const href = history.createHref({ pathname: path.pathname ? path.pathname : path});

        const onClick = event => {
            if (event.defaultPrevented) {
                return;
              }
          
              // Let the browser handle links that open new tabs/windows
              if (isModifiedEvent(event) || !isLeftClickEvent(event) || isTargetBlank(event)) {
                return;
              }
          
              // Prevent regular link behavior, which causes a browser refresh.
              event.preventDefault();
          
              // Push the route to the history.
              history.push(path);
        }

        const props = {
            href: href,
            onClick: onClick
        }
        if (checkActive){
            props.isActive = location.pathname === path;
        }

        return props;
    }
    return {linkTo:linkTo}
}
export default useLink;