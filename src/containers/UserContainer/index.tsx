import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchUser, resetState } from "../../store/user/actions";
import { RootState } from "../../store/rootReducer";
import User from "../../components/User";
import { useAppDispatch } from "../../core/hooks";

const UserContainer = () => {
  const params: any = useParams();
  const dispatch = useAppDispatch();
  const info = useSelector((state: RootState) => state.user.info);
  const isPending = useSelector((state: RootState) => state.user.pending);
  const errorMessage = useSelector((state: RootState) => state.user.error);
  const stories = useSelector((state: RootState) => state.user.stories);

  useEffect((): any => {
    dispatch(fetchUser(params.id));
    return () => {
      dispatch(resetState());
    };
  }, [dispatch, params.id]);

  return (
    <>
      {info && (
        <User
          info={info}
          stories={stories}
          isPending={isPending}
          errorMessage={errorMessage}
        />
      )}
    </>
  );
};

export default UserContainer;
