import * as React from "react";
import EditAccount from "../../components/template/accounts/editAccount";

const AccountEditPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <EditAccount id={params.id} />
    </>
  );
};

export default AccountEditPage;
