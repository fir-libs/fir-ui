import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import FirLink from './FirLink.vue'

describe('FirLink', () => {
    test('displays message', () => {
        const wrapper = mount(FirLink, {
            props: {
                href: 'test-href'
            },
            slots: {
                default: 'Link'
            }
        })

        expect(wrapper.text()).toContain('Link')
        expect(wrapper.attributes()).toHaveProperty('href')
        expect(wrapper.attributes()).toHaveProperty('href')
    })
});