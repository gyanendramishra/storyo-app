import { useEffect } from "react";
import Para from "../../components/Para";
import { securityActions } from "../../store/slices/SecuritySlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

const Home = () => {
  const dispatch = useAppDispatch();
  const {
    security: { user, token },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (token) {
      loadUser();
    }
  }, [token]);

  const loadUser = async () => {
    dispatch(securityActions.loadUser("640321b4fcecd6e5859e42eb"));
  };

  console.log("user", user);

  return (
    <div className="sm:text-center lg:text-left">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Data to enrich your 3</span>
        <span className="block text-indigo-600 xl:inline">online business</span>
      </h1>
      <Para className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </Para>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <a
            href="/"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
          >
            Get started
          </a>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a
            href="/"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
          >
            Live demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
