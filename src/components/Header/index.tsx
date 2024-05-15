import React from "react";
import { useDocumentTitle } from "../../utils";

interface HeaderProps {
  title: string;
  lead: string;
}

const ExampleHeader: React.FC<HeaderProps> = ({ title, lead }) => {
  useDocumentTitle(title);

  return (
    <header className="bg-hero py-5 mb-5">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 className="display-4 text-white mt-5 mb-2">{title}</h1>
            <p className="lead mb-5 text-white-50">{lead}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ExampleHeader;
