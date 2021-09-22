import activeIcon from "../../images/rest-flows/active.png"
import mindfulicon from "../../images/rest-flows/mindful.png"
import socialIcon from "../../images/rest-flows/social.png"
import { TodosContext } from "../../Store/TodosContext"
import { useContext, useState } from "react"
import { PomodoroContext } from "../../Store/PomodoroContext"
import { mindfullData, activeData, socialData } from "../BreakCard/WellnessTips"

const BreakCard = () => {
  const pomodoroCtx = useContext(PomodoroContext)
  const todoCtx = useContext(TodosContext)
  const [isPresentingBreakTimer, setIsPresentingBreakTimer] = useState(false)

  const [breakTime, setBreakTime] = useState({
    work: 0.333,
    break: 0.333,
    session: "work",
  })

  const presentBreakTimer = (id: string) => {
    if (id === "social") {
      window.open("/kumospace")
    }

    pomodoroCtx.updateBreakTimer(breakTime) // passes object back to useContext
    setIsPresentingBreakTimer(true)
    console.log("id is", id)

    if (id === "social") {
      pomodoroCtx.wellnessQuoteHandler(socialData, "social")
    }
    if (id === "active") {
      pomodoroCtx.wellnessQuoteHandler(activeData, "active")
    }
    if (id === "mindful") {
      pomodoroCtx.wellnessQuoteHandler(mindfullData, "mindful")
    }
  }

  return (
    <div>
      {!isPresentingBreakTimer && (
        <div className="flex flex-col w-full h-full m-0 p-0 items-center">
          <h2 className="mb-8 text-2xl font-semibold tracking-wide text-gray-600">
            Time for a break!
          </h2>
          <p className="text-xl tracking-wide text-gray-600">
            How would you like to spend the next 5 minutes?
          </p>
          <div className="mt-16 flex flex-row justify-evenly">
            <section className="mx-4">
              <img
                className="h-40 w-40 rounded-full shadow-lg transform hover:scale-110 ring-8 ring-transparent hover:ring-gray-100 cursor-pointer"
                src={socialIcon}
                alt="social icon"
                id="social"
                onClick={() => presentBreakTimer("social")}
              />
              <p className="text-xl font-semibold tracking-wide text-gray-600 mt-6">
                Social
              </p>
            </section>
            <section className="mx-4">
              <img
                className="h-40 w-40 rounded-full shadow-lg transform hover:scale-110 ring-8 ring-transparent hover:ring-gray-100 cursor-pointer"
                src={mindfulicon}
                alt="mindful icon"
                id="mindful"
                onClick={() => presentBreakTimer("mindful")}
              />
              <p className="text-xl font-semibold tracking-wide text-gray-600 mt-6">
                Mindful
              </p>
            </section>
            <section className="mx-4">
              <img
                className="h-40 w-40 rounded-full shadow-lg transform hover:scale-110 ring-8 ring-transparent hover:ring-gray-100 cursor-pointer"
                src={activeIcon}
                alt="active icon"
                id="active"
                onClick={() => presentBreakTimer("active")}
              />
              <p className="text-xl font-semibold tracking-wide text-gray-600 mt-6">
                Active
              </p>
            </section>
          </div>
        </div>
      )}

      {/* {isPresentingBreakTimer && <>
        

      </>} */}
    </div>
  )
}

export default BreakCard
