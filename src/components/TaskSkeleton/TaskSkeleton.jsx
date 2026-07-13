
import { ThemeContext } from "../../context/ContextAPI"
import { useProvider } from "../../hooks/useProvider"
import { Box, SkeletonCard, SkeletonLine} from "./TaskSkeleton.styled"

const TaskSkeleton = () => {
    const { theme } = useProvider(ThemeContext)

    return (
        <Box>
            <div>
                <SkeletonLine theme={theme}/>
                <div className="mobile">
                    <div>
                        <SkeletonCard theme={theme}>
                            <SkeletonLine className="badge" theme={theme}/>
                            <SkeletonLine className="title" theme={theme}/>
                            <SkeletonLine className="title" theme={theme}/>
                            <SkeletonLine className="date" theme={theme}/>
                        </SkeletonCard>
                    </div>

                    <div>
                        <SkeletonCard theme={theme}>
                            <SkeletonLine className="badge" theme={theme}/>
                            <SkeletonLine className="title" theme={theme}/>
                            <SkeletonLine className="title" theme={theme}/>
                            <SkeletonLine className="date" theme={theme}/>
                        </SkeletonCard>
                    </div>
                </div>
            </div>

            <div>
                <SkeletonLine theme={theme}/>
                <div className="mobile">
                    <div>
                        <SkeletonCard theme={theme}>
                            <SkeletonLine className="badge"theme={theme}/>
                            <SkeletonLine className="title"theme={theme}/>
                            <SkeletonLine className="title"theme={theme}/>
                            <SkeletonLine className="date"theme={theme}/>
                        </SkeletonCard>
                    </div>
                    <div>
                        <SkeletonCard theme={theme}>
                            <SkeletonLine className="badge"theme={theme}/>
                            <SkeletonLine className="title"theme={theme}/>
                            <SkeletonLine className="title"theme={theme}/>
                            <SkeletonLine className="date"theme={theme}/>
                        </SkeletonCard>
                    </div>
                </div>
            </div>

            <div>
                <SkeletonLine theme={theme}/>
                <div className="mobile">
                    <div>
                        <SkeletonCard theme={theme}>
                            <SkeletonLine className="badge"theme={theme}/>
                            <SkeletonLine className="title"theme={theme}/>
                            <SkeletonLine className="title"theme={theme}/>
                            <SkeletonLine className="date"theme={theme}/>
                        </SkeletonCard>
                    </div>
                    <div>
                        <SkeletonCard theme={theme}>
                            <SkeletonLine className="badge" theme={theme}/>
                            <SkeletonLine className="title" theme={theme}/>
                            <SkeletonLine className="title" theme={theme}/>
                            <SkeletonLine className="date" theme={theme}/>
                        </SkeletonCard>
                    </div>
                </div>
            </div>

            <div>
                <SkeletonLine theme={theme}/>
                <div className="mobile">
                    <div>
                        <SkeletonCard theme={theme}>
                            <SkeletonLine className="badge" theme={theme}/>
                            <SkeletonLine className="title" theme={theme}/>
                            <SkeletonLine className="title" theme={theme}/>
                            <SkeletonLine className="date" theme={theme}/>
                        </SkeletonCard>
                    </div>
                </div>
            </div>

            <div>
                <SkeletonLine theme={theme}/>
                <div className="mobile">
                    <div>
                        <SkeletonCard theme={theme}>
                            <SkeletonLine className="badge" theme={theme}/>
                            <SkeletonLine className="title" theme={theme}/>
                            <SkeletonLine className="title" theme={theme}/>
                            <SkeletonLine className="date" theme={theme}/>
                        </SkeletonCard>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default TaskSkeleton