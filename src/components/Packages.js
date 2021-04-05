import PackageInfo from './PackageInfo'

const Packages = () => {
    return (
        <div>
            <h1>Our packages offer:</h1>
            <PackageInfo tier="Free"/>
            <PackageInfo tier="Support"/>
            <PackageInfo tier="Shareholder"/>
        </div>
    )
}

export default Packages
