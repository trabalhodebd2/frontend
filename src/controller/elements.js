export const getValuesOfInputs = (elementForm) => {
    const elements = elementForm.querySelectorAll("input")
    let listValues = []
    
    for (const element of elements) {
        listValues.push(element.value)
    }
    
    return listValues
}