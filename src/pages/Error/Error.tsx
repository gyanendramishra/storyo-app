import { useRouteError } from "react-router-dom";
import Para from "../../components/Para";
import Typography from "../../components/Typography";

const Error = () => {

    const error = useRouteError() as any;

    return (
        <div className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <Typography as="h1" className="text-lg font-semibold text-indigo-600" text="Oops" />
                    <Para className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        Sorry, an unexpected error has occurred.
                    </Para>
                    <Para className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        <i>{error.statusText || error.message}</i>
                    </Para>
                </div>
            </div>
        </div>
    )
}

export default Error;