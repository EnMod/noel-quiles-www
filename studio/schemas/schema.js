// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import atom from './atom'
import basicProject from './basic-project'
import blogCategory from './blog/category'
import blogPost from './blog/post'
import clientProject from './client-project'
import gameProject from './game-project'
import icon from './icon'
import molecule from './molecule'
import showcaseItem from './showcase-item'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    atom,
    basicProject,
    blogCategory,
    blogPost,
    clientProject,
    gameProject,
    icon,
    molecule,
    showcaseItem,
  ])
})
