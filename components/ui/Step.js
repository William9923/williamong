import React from "react";
import Pinger from "@components/ui/Pinger";
import { HoverItemBlack } from "@components/ui/HoverItem";

export default function Step({ title, certificate, children }) {
  return (
    <li className="mb-4">
      <div className="flex items-center mb-2 text-green-700">
        <span className="sr-only">Ping</span>
        <Pinger />
        <p className="font-medium text-gray-900 ml-2">{title}</p>
      </div>
      <div className="border-l-4 ml-1">
        <p className="text-gray-700 ml-4">
          {children}
          <br />{" "}
          {!!certificate && (
            <HoverItemBlack>
              <div className="hover:p-1">
                <a href={certificate} target="_blank">
                  See Certificate →
                </a>
              </div>
            </HoverItemBlack>
          )}
        </p>
      </div>
    </li>
  );
}
