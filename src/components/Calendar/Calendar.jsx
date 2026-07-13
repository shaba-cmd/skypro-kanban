import { useState } from "react";
import { ThemeContext } from "../../context/ContextAPI"
import { useProvider } from "../../hooks/useProvider"
import { SCalendar, Ttl, Block, Nav, Month, Actions, Action, Content, DaysNames, DayName, Cells, Cell, Period, Text } from "./Calendar.styled"

function Calendar({ edit, newCard, selectedDate, onDateChange }) {
    const { theme } = useProvider(ThemeContext)
    
    const parse = (p) => p ? new Date(p) : new Date()
    const [current, setCurrent] = useState(parse(selectedDate))
    const [selected, setSelected] = useState(parse(selectedDate))

    const monthNames = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ]

    const shiftMonth = (n) => setCurrent(new Date(current.getFullYear(), current.getMonth() + n, 1))

    const select = (day) => {
        const y = current.getFullYear(), 
            m = String(current.getMonth()+1).padStart(2,'0'), 
            d = String(day).padStart(2,'0')
        const str = `${y}-${m}-${d}T00:00:00.000Z`
        setSelected(new Date(str))
        onDateChange?.(str)
    }

    const generateDays = () => {
        const year = current.getFullYear()
        const month = current.getMonth()
        
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        
        let startDay = firstDay.getDay()
        startDay = startDay === 0 ? 6 : startDay - 1
        
        const daysInMonth = lastDay.getDate()
        
        const prevMonthLastDay = new Date(year, month, 0).getDate()
        
        const days = []
        
        for (let i = startDay - 1; i >= 0; i--) {
            days.push({
                day: prevMonthLastDay - i,
                isOtherMonth: true,
                isSelected: false,
                isWeekend: false
            })
        }
        
        for (let i = 1; i <= daysInMonth; i++) {
            const isSelected = i === selected.getDate() && 
                              month === selected.getMonth() && 
                              year === selected.getFullYear()

            const dayOfWeek = (startDay + i - 1) % 7
            
            days.push({
                day: i,
                isOtherMonth: false,
                isSelected: isSelected,
                isWeekend: dayOfWeek === 5 || dayOfWeek === 6 
            })
        }
        
        const remaining = 42 - days.length
        for (let i = 1; i <= remaining; i++) {
            days.push({
                day: i,
                isOtherMonth: true,
                isSelected: false,
                isWeekend: false
            })
        }
        
        return days
    }

    const days = generateDays()

    const formatDate = (date) => {
        const d = String(date.getDate()).padStart(2, '0')
        const m = String(date.getMonth() + 1).padStart(2, '0')
        const y = String(date.getFullYear()).slice(2)
        return `${d}.${m}.${y}`
    }

    return (
        <SCalendar $edit={edit} $newCard={newCard}>
            <Ttl className="subttl">Даты</Ttl>
            <Block>
                <Nav>
                    <Month>{monthNames[current.getMonth()]} {current.getFullYear()}</Month>
                    <Actions theme={theme}>
                        <Action onClick={() => shiftMonth(-1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                            </svg>
                        </Action>
                        <Action onClick={() => shiftMonth(1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                            </svg>
                        </Action>
                    </Actions>
                </Nav>
                <Content>
                    <DaysNames>
                        <DayName>пн</DayName>
                        <DayName>вт</DayName>
                        <DayName>ср</DayName>
                        <DayName>чт</DayName>
                        <DayName>пт</DayName>
                        <DayName className="_weekend">сб</DayName>
                        <DayName className="_weekend">вс</DayName>
                    </DaysNames>
                    <Cells theme={theme}>
                        {days.map((cell, index) => (
                            <Cell
                                key={index}
                                className={`
                                    ${cell.isOtherMonth ? '_other-month' : ''}
                                    ${cell.isSelected ? '_active-day' : ''}
                                    ${cell.isWeekend ? '_weekend' : ''}
                                `}
                                onClick={() => !cell.isOtherMonth && select(cell.day)}
                            >
                                {cell.day}
                            </Cell>
                        ))}
                    </Cells>
                </Content>
        
                <Period>
                    <Text theme={theme}>
                        Срок исполнения: <span>{formatDate(selected)}</span>
                    </Text>
                </Period>
            </Block>
        </SCalendar>
    )
}

export default Calendar