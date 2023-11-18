import React from "react";
import InboxHeader from "../../components/Inbox/InboxHeader";
import InboxTable from "../../components/Inbox/InboxTable";

const Inbox = () => {
  return (
      <React.Fragment>
        <InboxHeader />
        <InboxTable />
      </React.Fragment>
  );
};

export default Inbox;
