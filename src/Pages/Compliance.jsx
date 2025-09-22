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
          <p className="container py-10 mx-auto text-2xl">
          <span className="font-bold logo-color">STYLORIUM SOURCING LTD.</span> uses the Plan, Do, Act and Check management method for the compliance. Which allows for efficiency and productivity. 
          </p>
        </div>
        <div className="container mx-auto my-5">
          <img className="mx-auto" src="https://i.postimg.cc/L84yy2rQ/Complience.png" alt="Compliance Flow" />
        </div>
        {/* Compliance Goals */}
        <div className="w-full p-6 text-center rounded-lg">
          <h3 className="mb-4 text-2xl font-bold">COMPLIANCE GOALS</h3>
          <ul className="mx-auto space-y-2 text-xl text-gray-600">
            <li className="flex flex-row items-center justify-center">
              <span className="mb-1 font-bold text-green-500">✔</span>
              <span className="text-center">
                Accelerating the business by creating a successful compliance program.
              </span>
            </li>
            <li className="flex flex-row items-center justify-center">
              <span className="mb-1 font-bold text-green-500">✔</span>
              <span className="text-center">
                Minimizing business risk through safe, secure, and environmental-friendly workplaces where the goods
                are produced.
              </span>
            </li>
            <li className="flex flex-row items-center justify-center">
              <span className="mb-1 font-bold text-green-500">✔</span>
              <span className="text-center">
                Increasing business reputation by fulfilling the customers&apos;s requirements.
              </span>
            </li>
          </ul>
        </div>
        {/* Section Container */}
        <div className="container max-w-6xl mx-auto mt-10">
          {/* PLAN | DO */}
          <div className="grid gap-8 mb-12 md:grid-cols-2">
            {/* PLAN */}
            <div className="p-6 text-center bg-white rounded-lg">
              <img
                src={plan}
                alt="Plan Icon"
                className="w-[16rem] h-[12rem] mx-auto mb-4"
              />
              <ul className="max-w-xs mx-auto space-y-2 text-left text-gray-600 text-md">
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
                  <span>Yearly & monthly audit schedule.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
                  <span>Developing a unique audit protocol & checklist.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
                  <span>Web based monitoring & verification.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
                  <span>Training schedule for capacity building of factories.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
                  <span>Setting a target.</span>
                </li>
              </ul>
            </div>

            {/* DO */}
            <div className="p-6 text-center bg-white rounded-lg">
              <img
                src={doo}
                alt="Do Icon"
                className="w-[16rem] h-[12rem] mx-auto mb-4"
              />
              <ul className="max-w-xs mx-auto space-y-2 text-left text-gray-600 text-md">
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
                  <span>Assessment & creating report.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
                  <span>Development visit & CAP follow-up.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
                  <span>Training on COC, Local law & certification.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
                  <span>SWOT analysis and special care of vulnerable factories and issues.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ACT | CHECK */}
          <div className="grid gap-8 mb-12 md:grid-cols-2">
            {/* ACT */}
            <div className="p-6 text-center bg-white rounded-lg">
              <img
                src={act}
                alt="Act Icon"
                className="w-[16rem] h-[12rem] mx-auto mb-4"
              />
              <ul className="max-w-xs mx-auto space-y-2 text-left text-gray-600 text-md">
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
                  <span>Development visit & proper guidance.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
                  <span>Preparing the TNA & measuring progress.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
                  <span>Knowledge, document and experience sharing.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
                  <span>Making sure of the fulfillment of requirement.</span>
                </li>
              </ul>
            </div>

            {/* CHECK */}
            <div className="p-6 text-center bg-white rounded-lg">
              <img
                src={check}
                alt="Check Icon"
                className="w-[16rem] h-[12rem] mx-auto mb-4"
              />
              <ul className="max-w-xs mx-auto space-y-2 text-left text-gray-600 text-md">
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
                  <span>Follow-up audit.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
                  <span>Surprise visit.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold text-green-500">✔</span>
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
