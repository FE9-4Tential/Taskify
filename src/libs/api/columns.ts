import baseaxios from "./axios";

interface ColumnData {
  title: string;
  dashboardId: number;
}

// 새로운 컬럼을 생성하는 함수
async function createColumn(columnData: ColumnData) {
  const response = await baseaxios.post(`/columns`, columnData);
  return response.data;
}

// 컬럼 목록을 가져오는 함수
async function getColumns() {
  const response = await baseaxios.get(`/columns`);
  return response.data;
}

// 기존 컬럼을 수정하는 함수
async function updateColumn(columnId: string, columnData: ColumnData) {
  const response = await baseaxios.put(`/columns/${columnId}`, columnData);
  return response.data;
}
// 컬럼을 삭제하는 함수
async function deleteColumn(columnId: string) {
  const response = await baseaxios.delete(`/columns/${columnId}`);
  return response.data;
}

// 컬럼에 카드 이미지를 업로드하는 함수
async function uploadCardImage(columnId: string, imageFile: File) {
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await baseaxios.post(
    `/columns/${columnId}/card-image`,
    formData,
  );
  return response.data;
}
