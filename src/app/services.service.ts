import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
  }

  // Categories
  createCategory(category: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/categories`, category, { headers: this.getHeaders() });
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  getCategory(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories/${id}`);
  }

  updateCategory(id: number, category: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/categories/${id}`, category, { headers: this.getHeaders() });
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/categories/${id}`, { headers: this.getHeaders() });
  }

  // Chatbot Messages
  createChatbotMessage(message: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/chatbot_messages`, message, { headers: this.getHeaders() });
  }

  getChatbotMessages(): Observable<any> {
    return this.http.get(`${this.apiUrl}/chatbot_messages`, { headers: this.getHeaders() });
  }

  getChatbotMessage(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/chatbot_messages/${id}`, { headers: this.getHeaders() });
  }

  updateChatbotMessage(id: number, message: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/chatbot_messages/${id}`, message, { headers: this.getHeaders() });
  }

  deleteChatbotMessage(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/chatbot_messages/${id}`, { headers: this.getHeaders() });
  }

  // Cities
  createCity(city: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cities`, city, { headers: this.getHeaders() });
  }

  getCities(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cities`);
  }

  getCity(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/cities/${id}`);
  }

  updateCity(id: number, city: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/cities/${id}`, city, { headers: this.getHeaders() });
  }

  deleteCity(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cities/${id}`, { headers: this.getHeaders() });
  }

  // Comments
  createComment(comment: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/comments`, comment, { headers: this.getHeaders() });
  }

  getComments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/comments`);
  }

  getComment(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/comments/${id}`);
  }

  updateComment(id: number, comment: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/comments/${id}`, comment, { headers: this.getHeaders() });
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/comments/${id}`, { headers: this.getHeaders() });
  }

  // Add this method to fetch comments by report ID
  getCommentsId(reportId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/comments?report_id=${reportId}`);
  }


  getCommentsByReportId(reportId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/comments/report/${reportId}`);
  }

  // Data Exports
  createDataExport(dataExport: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/data_exports`, dataExport, { headers: this.getHeaders() });
  }

  getDataExports(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data_exports`);
  }

  getDataExport(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/data_exports/${id}`);
  }

  updateDataExport(id: number, dataExport: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/data_exports/${id}`, dataExport, { headers: this.getHeaders() });
  }

  deleteDataExport(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/data_exports/${id}`, { headers: this.getHeaders() });
  }

  // Deleted Reasons
  createDeletedReason(deletedReason: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/deleted_reasons`, deletedReason, { headers: this.getHeaders() });
  }

  getDeletedReasons(): Observable<any> {
    return this.http.get(`${this.apiUrl}/deleted_reasons`);
  }

  getDeletedReason(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/deleted_reasons/${id}`);
  }

  updateDeletedReason(id: number, deletedReason: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/deleted_reasons/${id}`, deletedReason, { headers: this.getHeaders() });
  }

  deleteDeletedReason(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleted_reasons/${id}`, { headers: this.getHeaders() });
  }

  // Delete Requests
  createDeleteRequest(deleteRequest: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/delete_requests`, deleteRequest, { headers: this.getHeaders() });
  }

  getDeleteRequests(): Observable<any> {
    return this.http.get(`${this.apiUrl}/delete_requests`);
  }

  getDeleteRequest(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/delete_requests/${id}`);
  }

  updateDeleteRequest(id: number, deleteRequest: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/delete_requests/${id}`, deleteRequest, { headers: this.getHeaders() });
  }

  deleteDeleteRequest(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete_requests/${id}`, { headers: this.getHeaders() });
  }

  // Evidence
  createEvidence(evidence: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/evidence`, evidence, { headers: this.getHeaders() });
  }

  getEvidence(): Observable<any> {
    return this.http.get(`${this.apiUrl}/evidence`);
  }

  getEvidenceById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/evidence/${id}`);
  }

  updateEvidence(id: number, evidence: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/evidence/${id}`, evidence, { headers: this.getHeaders() });
  }

  deleteEvidence(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/evidence/${id}`, { headers: this.getHeaders() });
  }

  // Invoices
  createInvoice(invoice: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/invoices`, invoice, { headers: this.getHeaders() });
  }

  getInvoices(): Observable<any> {
    return this.http.get(`${this.apiUrl}/invoices`);
  }

  getInvoice(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/invoices/${id}`);
  }

  updateInvoice(id: number, invoice: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/invoices/${id}`, invoice, { headers: this.getHeaders() });
  }

  deleteInvoice(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/invoices/${id}`, { headers: this.getHeaders() });
  }

  // Login History
  createLoginHistory(loginHistory: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login_history`, loginHistory, { headers: this.getHeaders() });
  }

  getLoginHistory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/login_history`);
  }

  getLoginHistoryById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/login_history/${id}`);
  }

  updateLoginHistory(id: number, loginHistory: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/login_history/${id}`, loginHistory, { headers: this.getHeaders() });
  }

  deleteLoginHistory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/login_history/${id}`, { headers: this.getHeaders() });
  }



  // Notifications
  createNotification(notification: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/notifications`, notification, { headers: this.getHeaders() });
  }

  getNotifications(): Observable<any> {
    return this.http.get(`${this.apiUrl}/notifications`);
  }

  getNotification(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/notifications/${id}`);
  }

  updateNotification(id: number, notification: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/notifications/${id}`, notification, { headers: this.getHeaders() });
  }

  deleteNotification(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/notifications/${id}`, { headers: this.getHeaders() });
  }

  // Notification Templates
  createNotificationTemplate(template: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/notification_templates`, template, { headers: this.getHeaders() });
  }

  getNotificationTemplates(): Observable<any> {
    return this.http.get(`${this.apiUrl}/notification_templates`);
  }

  getNotificationTemplate(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/notification_templates/${id}`);
  }

  updateNotificationTemplate(id: number, template: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/notification_templates/${id}`, template, { headers: this.getHeaders() });
  }

  deleteNotificationTemplate(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/notification_templates/${id}`, { headers: this.getHeaders() });
  }

  // Payments
  createPayment(payment: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/payments`, payment, { headers: this.getHeaders() });
  }

  getPayments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/payments`);
  }

  getPayment(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/payments/${id}`);
  }

  updatePayment(id: number, payment: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/payments/${id}`, payment, { headers: this.getHeaders() });
  }

  deletePayment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/payments/${id}`, { headers: this.getHeaders() });
  }

  // Permissions
  createPermission(permission: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/permissions`, permission, { headers: this.getHeaders() });
  }

  getPermissions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/permissions`);
  }

  getPermission(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/permissions/${id}`);
  }

  updatePermission(id: number, permission: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/permissions/${id}`, permission, { headers: this.getHeaders() });
  }

  deletePermission(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/permissions/${id}`, { headers: this.getHeaders() });
  }

  // Plans
  createPlan(plan: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/plans`, plan, { headers: this.getHeaders() });
  }

  getPlans(): Observable<any> {
    return this.http.get(`${this.apiUrl}/plans`);
  }

  getPlan(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/plans/${id}`);
  }

  updatePlan(id: number, plan: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/plans/${id}`, plan, { headers: this.getHeaders() });
  }

  deletePlan(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/plans/${id}`, { headers: this.getHeaders() });
  }

  // Media
  createMedia(media: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/media`, media, { headers: this.getHeaders() });
  }

  getMedia(): Observable<any> {
    return this.http.get(`${this.apiUrl}/media`);
  }

  getMediaById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/media/${id}`);
  }

  updateMedia(id: number, media: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/media/${id}`, media, { headers: this.getHeaders() });
  }

  deleteMedia(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/media/${id}`, { headers: this.getHeaders() });
  }

  // Reports

  createReport(report: any, files: File[]): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('user_id', report.user_id);
    formData.append('title', report.title);
    formData.append('description', report.description);
    formData.append('category_id', report.category_id);
    formData.append('city_id', report.city_id);

    files.forEach((file) => {
      formData.append('files', file, file.name);
    });

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.post(`${this.apiUrl}/reports`, formData, { headers });
  }

  getReports(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reports`);
  }

  getReportsCategory(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/reports/category/${id}`);
  }

  getReport(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/reports/${id}`);
  }

  updateReport(id: number, report: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/reports/${id}`, report, { headers: this.getHeaders() });
  }

  deleteReport(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reports/${id}`, { headers: this.getHeaders() });
  }

  // Roles
  createRole(role: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/roles`, role, { headers: this.getHeaders() });
  }

  getRoles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/roles`);
  }

  getRole(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/roles/${id}`);
  }

  updateRole(id: number, role: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/roles/${id}`, role, { headers: this.getHeaders() });
  }

  deleteRole(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/roles/${id}`, { headers: this.getHeaders() });
  }

  // User Registration
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // User Login
  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  loginUsers(credentials: { email: string, password: string , ip_address : string}): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Get User Information
  getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`, { headers: this.getHeaders() });
  }

  // Get User Information from Token
  getUserInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user-info`, { headers: this.getHeaders() });
  }
}

export default ServicesService;
