import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import FolderName from './FolderName'

describe(`FolderName component`, () => {
    it('renders a .FolderName by default', () => {
        const wrapper = shallow(<FolderName />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders a h3 with folder name when in props', () => {
        const props = {
            match: {
                params: {
                    noteId: 'test-note-id'
                }
            }
        }

        const context = {
            notes: [{ id: 'test-note-id', folderId: 'test-folder-id' }],
            folders: [{ id: 'test-folder-id', name: 'Important' }]
          }
    
        const h3 = shallow(<FolderName {...props} />, context)
            .find('.FolderName__name')
        expect(toJson(h3)).toMatchSnapshot()
    })
})