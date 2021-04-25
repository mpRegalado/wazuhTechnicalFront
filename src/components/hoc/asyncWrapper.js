import { EuiLoadingContent } from "@elastic/eui"

const AsyncWrapper = ({children,loading,error}) => {
    let render = <p>Nothing Here</p>
    if (loading){
        render = <EuiLoadingContent />
    } else if (error) {
        render = <p>ERROR: {error}</p>
    } else {
        render = children
    }

    return render
}

export default AsyncWrapper