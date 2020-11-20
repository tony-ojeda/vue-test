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

// console.log('data: ',vm.$data,'props',vm.$props,'el',vm.$el,'children',vm.$children)
