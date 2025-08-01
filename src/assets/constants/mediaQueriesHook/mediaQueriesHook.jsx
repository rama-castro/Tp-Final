import { useMediaQuery } from "react-responsive";

const mediaQueriesHook = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 501px) and (max-width: 800px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 801px)' }); 

  return { isMobile, isTablet, isDesktop };
};

export default mediaQueriesHook;