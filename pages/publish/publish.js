Page({
  data: { media: [], date: '2026-10-15', album: '日常碎片', text: '' },
  chooseMedia() {
    wx.chooseMedia({
      count: 9,
      mediaType: ['image', 'video'],
      sourceType: ['album', 'camera'],
      success: res => this.setData({ media: res.tempFiles })
    })
  },
  onText(e) { this.setData({ text: e.detail.value }) },
  publish() { wx.showToast({ title: '第一版暂存成功', icon: 'success' }) }
})
