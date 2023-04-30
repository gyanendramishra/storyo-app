import { Component, ErrorInfo, ReactNode } from "react";

interface IProps {
    children?: ReactNode;
}
  
interface IState {
    hasError: boolean;
    message: String;
}

class ErrorBoundary extends Component<IProps, IState> {
    
    public state: IState = {
        hasError: false,
        message: ""
    };

    static getDerivedStateFromError(error: String): IState { 
        return {
            hasError:  true,
            message: error
        }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo)
    }

    public render() {
        if(this.state.hasError) {
            return <>Sorry.. there was an error</>;
        }

        return this.props.children
    }
}

export default ErrorBoundary;