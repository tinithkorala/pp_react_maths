import classes from "./index.module.css"

const PageTitle = ({children, textAlign}) => {
  return (
    <h1 className={classes.pageTitle} style={{textAlign: textAlign}}>{children}</h1>
  )
}

export default PageTitle