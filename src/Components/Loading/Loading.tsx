import React from "react"
// import loadingWoman from "./loadingZen.gif"
// import spinner from "./spinner2.gif"
import CircularProgress from "@material-ui/core/CircularProgress"

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50%",
      }}
    >
      <CircularProgress></CircularProgress>
    </div>
  )
}

export default Loading
