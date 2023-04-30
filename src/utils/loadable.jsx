import { Suspense, lazy } from "react";

const loadable = (importFunction, {fallback = null} = {fallback: null}) => {
    
    const LazyComponent = lazy(importFunction);
    
    return (props) => (
        <Suspense fallback={fallback}>
            <LazyComponent {...props} />
        </Suspense>
    );
}

export default loadable;