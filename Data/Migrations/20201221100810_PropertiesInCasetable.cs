using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication3.Data.Migrations
{
    public partial class PropertiesInCasetable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Lawyer2AFM",
                table: "Cases",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Spouse1AFM",
                table: "Cases",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Spouse2AFM",
                table: "Cases",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "State",
                table: "Cases",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Lawyer2AFM",
                table: "Cases");

            migrationBuilder.DropColumn(
                name: "Spouse1AFM",
                table: "Cases");

            migrationBuilder.DropColumn(
                name: "Spouse2AFM",
                table: "Cases");

            migrationBuilder.DropColumn(
                name: "State",
                table: "Cases");
        }
    }
}
