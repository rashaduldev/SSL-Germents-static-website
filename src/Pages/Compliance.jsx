import Nav from "../components/Navber/Nav";
import SecondNavImg from "../components/SecondNavImg";
import plan from '../assets/image/complians/plan.png';
import doo from '../assets/image/complians/do.png';
import check from '../assets/image/complians/check.png';
import act from '../assets/image/complians/act.png';
import navBgimg from '../assets/image/Compliance_Top_Image.jpeg'

const CompliancePage = () => {
  return (
    <div>
      <Nav isVisible={true} />
      <SecondNavImg text="COMPLIANCE" img={navBgimg}/>
      <div className="">
        <div className="">
          <p className="container mx-auto py-10 text-2xl md:text-[1.75rem] tracking-widers gruppo-regular">
          Stylorium Sourcing Ltd uses the Plan, Do, Act and Check management method for the compliance. Which allows for efficiency and productivity.
          </p>
        </div>
        <div className="container mx-auto my-5">
          <img className="mx-auto" src="https://i.postimg.cc/L84yy2rQ/Complience.png" alt="Compliance Flow" />
        </div>
        {/* Compliance Goals */}
        <div className="text-center p-6 w-full rounded-lg">
          <h3 className="text-2xl font-bold mb-4">COMPLIANCE GOALS</h3>
          <ul className="text-gray-600 space-y-2 text-xl mx-auto">
            <li className="flex flex-row justify-center items-center">
              <span className="text-green-500 font-bold mb-1">✔</span>
              <span className="text-center">
                Accelerating the business by creating a successful compliance program.
              </span>
            </li>
            <li className="flex flex-row justify-center items-center">
              <span className="text-green-500 font-bold mb-1">✔</span>
              <span className="text-center">
                Minimizing business risk through safe, secure, and environmental-friendly workplaces where the goods
                are produced.
              </span>
            </li>
            <li className="flex flex-row justify-center items-center">
              <span className="text-green-500 font-bold mb-1">✔</span>
              <span className="text-center">
                Increasing business reputation by fulfilling the customers&apos;s requirements.
              </span>
            </li>
          </ul>
        </div>
        {/* Section Container */}
        <div className="container mx-auto max-w-6xl mt-10">
          {/* PLAN | DO */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* PLAN */}
            <div className="text-center p-6 bg-white rounded-lg">
              <img
                src={plan}
                alt="Plan Icon"
                className="w-[16rem] h-[12rem] mx-auto mb-4"
              />
              <ul className="text-md text-gray-600 space-y-2 text-left mx-auto max-w-xs">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Yearly & monthly audit schedule.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Developing a unique audit protocol & checklist.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Web base monitoring & verification.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Training schedule for capacity building of factories.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Setting a target.</span>
                </li>
              </ul>
            </div>

            {/* DO */}
            <div className="text-center p-6 bg-white rounded-lg">
              <img
                src={doo}
                alt="Do Icon"
                className="w-[16rem] h-[12rem] mx-auto mb-4"
              />
              <ul className="text-md text-gray-600 space-y-2 text-left mx-auto max-w-xs">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Assessment & creating report.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Development visit & CAP follow-up.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Training on COC, Local law & certification.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Website follow-up and desktop verification.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>SWOT analysis and special care of vulnerable factories and issues.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ACT | CHECK */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* ACT */}
            <div className="text-center p-6 bg-white rounded-lg">
              <img
                src={act}
                alt="Act Icon"
                className="w-[16rem] h-[12rem] mx-auto mb-4"
              />
              <ul className="text-md text-gray-600 space-y-2 text-left mx-auto max-w-xs">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Development visit & proper guidance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Preparing the TNA & measuring progress.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Knowledge, document and experience sharing.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Making sure of the fulfillment of requirement.</span>
                </li>
              </ul>
            </div>

            {/* CHECK */}
            <div className="text-center p-6 bg-white rounded-lg">
              <img
                src={check}
                alt="Check Icon"
                className="w-[16rem] h-[12rem] mx-auto mb-4"
              />
              <ul className="text-md text-gray-600 space-y-2 text-left mx-auto max-w-xs">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Follow-up audit.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Desktop verification.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Surprise visit.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✔</span>
                  <span>Route-cause analysis.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CompliancePage;
