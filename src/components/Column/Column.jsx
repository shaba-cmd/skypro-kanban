import Card from "../Card/Card"
import { SColumn, Title, Cards } from "./Column.styled.js";
import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

function Column ({ status, tasks }) {
    const { setNodeRef, isOver } = useDroppable({ id: status })

    return (
        <SColumn>
            <Title>
                <p>{status}</p>
            </Title>

            <SortableContext
                items={tasks.map(t => t._id)}
                strategy={verticalListSortingStrategy}
            >
                <Cards ref={setNodeRef} $isOver={isOver}>
                    {tasks.map((el) => {
                        return (
                            <Card key={el._id} task={el} />
                        );
                    })}
                </Cards>
            </SortableContext>
        </SColumn>
    )
}

export default Column;