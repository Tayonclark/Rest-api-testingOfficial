const courseServices = require("../services/courses");

class CourseController {
  async getCourseBySubject(request) {
    const subjectCode = request.params.subject;
    const result = await courseServices.getCoursesBySubject(subjectCode);
    return JSON.stringify(result);
  }

  async getGenEdCoursesByCategory(request) {
    const categoryCode = request.params.category;
    const result = await courseServices.getCoursesByGenEdCategory(categoryCode);
    return JSON.stringify(result);
  }
}
module.exports = new CourseCOntroller();
