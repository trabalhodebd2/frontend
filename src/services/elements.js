export const getValuesOfElement = (elementForm, tagElement) => {
    const elements = elementForm.querySelectorAll(tagElement)
    let listValues = []
    
    for (const element of elements) {
        listValues.push(element.value)
    }
    
    return listValues
}

export const getInputRadioChecked = (elementForm) => {
    const elements = elementForm.querySelectorAll(`input[type="radio"]`)
    
    for (const element of elements) {
        if (element.checked) return element.value
        console.log(element)
    }
}