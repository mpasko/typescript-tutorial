export function hideClass(classId: string) {
  const allContainers = jQuery(classId);
  allContainers.addClass('hidden');
}

export function showClass(classId: string) {
  const allContainers = jQuery(classId);
  allContainers.removeClass('hidden');
}