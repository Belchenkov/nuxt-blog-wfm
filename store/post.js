const posts = [
  {title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: 'id1'},
  {title: 'Post 2', date: new Date(), views: 22, comments: [1, 2], _id: 'id2'},
  {title: 'Post 3', date: new Date(), views: 22, comments: [1, 2], _id: 'id3'}
];

export const actions = {
  async fetchAdmin({}) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts)
      }, 1000)
    });
  },
  async fetchAdminById({}, id) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id));
      }, 1000)
    });
  },
  async create({commit}, {title, text, image}) {
    
    try {
      const fd = new FormData();
      fd.append('title', title);
      fd.append('text', text);
      fd.append('image', image, image.name);

    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
    
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000)
    });
  },
  async update({}, {id, text}) {

  },
  async remove({}, id) {

  }
};
