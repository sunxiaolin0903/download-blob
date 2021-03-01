let downloadFileByBlob = (blob, filename) => {
  const blobContent = new Blob([blob]); // 创建Blob实例
  const blobUrl = window.URL.createObjectURL(blobContent); // Blob实例转化成url
  const eleLink = document.createElement('a'); // 创建a标签
  eleLink.download = filename; // 设置下载文件名
  eleLink.style.display = 'none';
  eleLink.href = blobUrl;
  document.body.appendChild(eleLink);
  eleLink.click(); // 触发点击
  document.body.removeChild(eleLink); // 然后移除
};

module.exports = downloadFileByBlob;
