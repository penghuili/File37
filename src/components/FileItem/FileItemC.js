import { connect } from 'react-redux';

import { fileActions, fileSelectors } from '../../shared/react/store/file/fileStore';
import { sharedActionCreators } from '../../shared/react/store/sharedActions';
import FileItem from './FileItem';

const mapStateToProps = (state, { fileId }) => {
  return {
    fileId,
    isDownloadingFile: fileSelectors.downloadFile.isPending(state),
    isDeleting: fileSelectors.deleteItem.isPending(state),
  };
};

const mapDispatchToProps = {
  onDownloadFile: fileActions.downloadFileRequested,
  onDelete: fileActions.deleteRequested,
  onNav: sharedActionCreators.navigate,
};

export default connect(mapStateToProps, mapDispatchToProps)(FileItem);
