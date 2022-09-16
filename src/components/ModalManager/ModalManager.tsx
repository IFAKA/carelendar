import { RootStateOrAny, useSelector } from "react-redux";
import { ReminderForm } from "../ReminderForm";
import { ReminderList } from "../ReminderList";

const ModalManager = () => {
  const { showForm, showList } = useSelector((state: RootStateOrAny) => state.modals)
  return (
    <>
      {showList && <ReminderList />}
      {showForm && <ReminderForm />}
    </>
  );
};

export default ModalManager;
