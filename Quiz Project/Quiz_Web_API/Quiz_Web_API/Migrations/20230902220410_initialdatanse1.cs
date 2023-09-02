using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Quiz_Web_API.Migrations
{
    public partial class initialdatanse1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Option_4",
                table: "QuestionTable",
                newName: "Option4");

            migrationBuilder.RenameColumn(
                name: "Option_3",
                table: "QuestionTable",
                newName: "Option3");

            migrationBuilder.RenameColumn(
                name: "Option_2",
                table: "QuestionTable",
                newName: "Option2");

            migrationBuilder.RenameColumn(
                name: "Option_1",
                table: "QuestionTable",
                newName: "Option1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Option4",
                table: "QuestionTable",
                newName: "Option_4");

            migrationBuilder.RenameColumn(
                name: "Option3",
                table: "QuestionTable",
                newName: "Option_3");

            migrationBuilder.RenameColumn(
                name: "Option2",
                table: "QuestionTable",
                newName: "Option_2");

            migrationBuilder.RenameColumn(
                name: "Option1",
                table: "QuestionTable",
                newName: "Option_1");
        }
    }
}
