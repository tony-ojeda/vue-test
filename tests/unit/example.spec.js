import {mount} from '@vue/test-utils'
import App from '@/App.vue'
import {huevo, espinaca} from "./jestTest"

const wrapper = mount(App)
const vm = wrapper.vm

describe('Se probara la calidad de los productos', ()=>{
	test('Calidad del huevo',() => {
		expect(huevo().estado[0]).toBe('fresco')
	});
	
	test('Calidad de la espinaca', () => {
		expect(espinaca()).toEqual({
			estado: 1,
			color: 'verde'
		})
	})
})

describe('Probar que se cambió la propiedad changeTest ', () => {
	test('should click a button', () => {
		const lastValue = wrapper.vm.changeTest
		wrapper.find('button').trigger('click')
		expect(wrapper.vm.changeTest).toBe(lastValue+1)
	})
})

// console.log('data: ',vm.$data,'props',vm.$props,'el',vm.$el,'children',vm.$children)
/** Propiedades de los Wrapper
Un Wrapper contiene un elemento llamado vm, el cual es la instancia de Vue de la cual estamos haciendo el Wrapper.
	Para comprobar esto, vamos a agregar la siguiente línea de código, en el mismo archivo que estamos usando:
const vm = wrapper.vm
Sobre ese elemento vamos a acceder a muchas propiedades de esta instancia, de la siguiente manera:
    vm.$data
Tipo: Object
Descripción: este elemento es la propiedad data donde están nuestros estados.
	    vm.$props
Tipo: Object
Descripción: estas son las propiedades que recibe el componente.
	    vm.$el
Tipo: Element
Descripción: el elemento raíz del DOM, el cual está manejando Vue.
	    vm.$children
Tipo: Array < Vue instance >
Descripción: Array de las instancias de los nodos hijos del componente de la instancia.
**/
