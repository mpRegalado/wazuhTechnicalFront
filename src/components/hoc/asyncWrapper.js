import { EuiLoadingContent, EuiCallOut } from "@elastic/eui"
 
const AsyncWrapper = ({children,loading,error}) => {
    let render = children;
    if (loading){
        render = <EuiLoadingContent />
    } else if (error) {
        render = <EuiCallOut title={error} color="danger" iconType="alert" />
    }
 
    return render
}
 
export default AsyncWrapper