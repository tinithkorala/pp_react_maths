import classes from "./index.module.css"

const PageSubTitle = ({children, textAlign}) => {
  return (
    <h1 className={classes.pageSubTitle} style={{textAlign: textAlign}}>{children}</h1>
  )
}

export default PageSubTitle