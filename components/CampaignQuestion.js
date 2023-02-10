import { useState } from "react";
import { useCampaign } from "../context/campaign";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CampaignQuestion() {
  const { question, setQuestion } = useCampaign();
  const handleQuestion = (val) => {
    setQuestion(val);
  };

  return (
    <div className="flex items-start space-x-4 pt-2">
      <div className="min-w-0 flex-1">
        {/* <div>{question}</div> */}
        <form action="#" className="relative w-1/2">
          <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500">
            <label htmlFor="comment" className="sr-only">
              Add your campaign question...
            </label>
            <textarea
              rows={1}
              name="comment"
              id="comment"
              className="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm"
              placeholder="Hello [Name], how about them Yankees?"
              defaultValue={question}
              onChange={(e) => handleQuestion(e.target.value)}
            />

            {/* Spacer element to match the height of the toolbar */}
            <div className="py-2" aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-end py-2 pl-3 pr-2">
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
