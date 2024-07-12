import { ReactNode } from "react"

type FormWrapperProps = {
  title: string
  children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <div className="form-wrapper-container">
      <h2 className="title-text form-wrapper-title-container">
        {title}
      </h2>

      <div
        className="form-wrapper-content-container"
      >
        {children}
      </div>
    </div>
  )
}

/*

        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
*/