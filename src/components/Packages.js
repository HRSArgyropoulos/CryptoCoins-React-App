import PackageInfo from './PackageInfo'

const Packages = () => {
    return (
        <section className="packages">
            <h1>Our packages offer:</h1>
            <div className="pkg">
                <PackageInfo className="free-pkg" tier="Free"/>
                <PackageInfo className="supp-pkg" tier="Support"/>
                <PackageInfo className="shrhold-pkg" tier="Shareholder"/>
            </div>
        </section>
    )
}

export default Packages
