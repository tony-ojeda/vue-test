import {mount} from '@vue/test-utils'
import App from '@/App.vue'

describe('Testing the correct rendering of elements', () => {
	const wrapper = mount(App)

	test('should render 2 sections', () => {
		expect(wrapper.find('.app-pokemon-main').exists()).toBeTruthy();
		expect(wrapper.find('.app-pokemon-main').element.tagName).toBeTruthy();
		expect(wrapper.find('.app-pokemon-stats').exists()).toBeTruthy();
		expect(wrapper.find('.app-pokemon-stats').element.tagName).toBeTruthy();
	})

	test('should render 2 p', () => {
		expect(wrapper.find('.pokemon-name').exists()).toBeTruthy();
		expect(wrapper.find('.pokemon-name').element.tagName).toBeTruthy();
		expect(wrapper.find('#abilities').exists()).toBeTruthy();
		expect(wrapper.find('#abilities').element.tagName).toBeTruthy();
	})

	test('should render 1 button', () => {
		expect(wrapper.find('button').exists()).toBeTruthy();
		expect(wrapper.find('button').element.tagName).toBeTruthy();
	})

	test('should render 1 ul', () => {
		expect(wrapper.find('ul').exists()).toBeTruthy();
		expect(wrapper.find('ul').element.tagName).toBeTruthy
	})

	test('should render 1 ul', () => {
		expect(wrapper.find('.component').exists()).toBeTruthy();
	})
})
