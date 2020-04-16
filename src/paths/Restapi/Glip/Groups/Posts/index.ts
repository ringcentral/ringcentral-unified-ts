import Text from './Text'
import GlipCreatePost from '../../../../../definitions/GlipCreatePost'
import GlipPostInfo from '../../../../../definitions/GlipPostInfo'
import ListGlipGroupPostsParameters from '../../../../../definitions/ListGlipGroupPostsParameters'
import GlipPosts from '../../../../../definitions/GlipPosts'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  postId: string
  parent: Parent

  constructor(parent: Parent, postId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.postId = postId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.postId !== null) {
      return `${this.parent.path()}/posts/${this.postId}`
    }

    return `${this.parent.path()}/posts`
  }

  /**
   * Operation: Get Group Posts
   * Http get /restapi/v1.0/glip/groups/{groupId}/posts
   */
  async get(queryParams?: ListGlipGroupPostsParameters): Promise<GlipPosts> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Post in Group
   * Http post /restapi/v1.0/glip/groups/{groupId}/posts
   */
  async post(glipCreatePost: GlipCreatePost): Promise<GlipPostInfo> {
    return this.rc.post(this.path(false), glipCreatePost)
  }

  text(): Text {
    return new Text(this)
  }
}

export default Index