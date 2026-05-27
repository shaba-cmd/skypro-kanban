import { columnTitleList } from "../../data"
import Column from "../Column/Column"

function Main ({ loading }) {
    return (
        <main className="main">
            <div className="container">   
                <div className="main__block">
                    <div className="main__content">
                        {loading 
                            ? 'Данные загружаются...' 
                            : columnTitleList.map((el) => <Column status={el.status}/>) }
                    </div> 
                </div>
            </div>
        </main>
    )
}

export default Main