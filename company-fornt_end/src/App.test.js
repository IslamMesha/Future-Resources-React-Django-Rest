import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "Edmond", "Jean-Philippe"], ["George", "Pierre Edouard", "Jean-Philippe"], ["George", "Anas", "Edmond"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getEmployeeList", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Edmond", "George"], ["George", "George", "Jean-Philippe"], ["Pierre Edouard", "Pierre Edouard", "George"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.getEmployeeList()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getEmployeeDatail", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Michael", "Michael"], ["Pierre Edouard", "Michael", "George"], ["Jean-Philippe", "Michael", "Edmond"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.getEmployeeDatail({ key: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.getEmployeeDatail({ key: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.getEmployeeDatail({ key: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.getEmployeeDatail(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("editEmployeeDatail", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Pierre Edouard", "George"], ["George", "Anas", "Anas"], ["Jean-Philippe", "George", "Michael"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.editEmployeeDatail({ key: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.editEmployeeDatail({ key: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.editEmployeeDatail({ key: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.editEmployeeDatail(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("deleteEmployee", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Anas", "Michael"], ["Michael", "Anas", "Edmond"], ["Michael", "George", "Jean-Philippe"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.deleteEmployee("v1.2.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.deleteEmployee("4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.deleteEmployee("v4.0.0-rc.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.deleteEmployee("1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.deleteEmployee("^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.deleteEmployee(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getNextPage", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Pierre Edouard", "Pierre Edouard"], ["Michael", "Pierre Edouard", "Michael"], ["Michael", "Jean-Philippe", "Pierre Edouard"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.getNextPage()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getPreviousPage", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "George", "Pierre Edouard"], ["George", "George", "Pierre Edouard"], ["Edmond", "Jean-Philippe", "Edmond"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.getPreviousPage()
        }
    
        expect(callFunction).not.toThrow()
    })
})
