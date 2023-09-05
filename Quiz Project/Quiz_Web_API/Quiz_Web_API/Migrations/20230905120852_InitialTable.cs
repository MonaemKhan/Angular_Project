using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Quiz_Web_API.Migrations
{
    public partial class InitialTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "QuizTable",
                columns: table => new
                {
                    QuizId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QuizName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QuizTable", x => x.QuizId);
                });

            migrationBuilder.CreateTable(
                name: "UserTable",
                columns: table => new
                {
                    UsertId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserTable", x => x.UsertId);
                });

            migrationBuilder.CreateTable(
                name: "QuestionTable",
                columns: table => new
                {
                    QuestionId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QuestionName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Option1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Option2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Option3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Option4 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Right_Answer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Mark = table.Column<int>(type: "int", nullable: false),
                    QuizId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QuestionTable", x => x.QuestionId);
                    table.ForeignKey(
                        name: "FK_QuestionTable_QuizTable_QuizId",
                        column: x => x.QuizId,
                        principalTable: "QuizTable",
                        principalColumn: "QuizId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Your_AnswerTable",
                columns: table => new
                {
                    AnswerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Answer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QuestionId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Your_AnswerTable", x => x.AnswerId);
                    table.ForeignKey(
                        name: "FK_Your_AnswerTable_QuestionTable_QuestionId",
                        column: x => x.QuestionId,
                        principalTable: "QuestionTable",
                        principalColumn: "QuestionId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Quiz_TrackTable",
                columns: table => new
                {
                    QuizTrackId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    AnswerId = table.Column<int>(type: "int", nullable: false),
                    Your_AnswersAnswerId = table.Column<int>(type: "int", nullable: true),
                    QuestionId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Quiz_TrackTable", x => x.QuizTrackId);
                    table.ForeignKey(
                        name: "FK_Quiz_TrackTable_QuestionTable_QuestionId",
                        column: x => x.QuestionId,
                        principalTable: "QuestionTable",
                        principalColumn: "QuestionId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Quiz_TrackTable_UserTable_UserId",
                        column: x => x.UserId,
                        principalTable: "UserTable",
                        principalColumn: "UsertId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Quiz_TrackTable_Your_AnswerTable_Your_AnswersAnswerId",
                        column: x => x.Your_AnswersAnswerId,
                        principalTable: "Your_AnswerTable",
                        principalColumn: "AnswerId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_QuestionTable_QuizId",
                table: "QuestionTable",
                column: "QuizId");

            migrationBuilder.CreateIndex(
                name: "IX_Quiz_TrackTable_QuestionId",
                table: "Quiz_TrackTable",
                column: "QuestionId");

            migrationBuilder.CreateIndex(
                name: "IX_Quiz_TrackTable_UserId",
                table: "Quiz_TrackTable",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Quiz_TrackTable_Your_AnswersAnswerId",
                table: "Quiz_TrackTable",
                column: "Your_AnswersAnswerId");

            migrationBuilder.CreateIndex(
                name: "IX_Your_AnswerTable_QuestionId",
                table: "Your_AnswerTable",
                column: "QuestionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Quiz_TrackTable");

            migrationBuilder.DropTable(
                name: "UserTable");

            migrationBuilder.DropTable(
                name: "Your_AnswerTable");

            migrationBuilder.DropTable(
                name: "QuestionTable");

            migrationBuilder.DropTable(
                name: "QuizTable");
        }
    }
}
